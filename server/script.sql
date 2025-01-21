-- Get the parameter for the database name
SET @db_name = 'msm';
SET @sql = CONCAT('CREATE DATABASE IF NOT EXISTS ', @db_name);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Switch to the newly created database
SET @sql = CONCAT('USE ', @db_name);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Create the 'church' table (main table that all other tables reference)
CREATE TABLE IF NOT EXISTS church (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the 'roles' table (to store roles like master, admin, member)
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name ENUM('master', 'leader', 'member', 'multimedia') NOT NULL
);

-- Create the 'status' table (to store the possible states for entities)
CREATE TABLE IF NOT EXISTS status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name ENUM('active', 'inactive', 'pending', 'completed', 'archived', 'vacation') NOT NULL
);

-- Create the 'group' table (references the church table)
CREATE TABLE IF NOT EXISTS `group` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_start DATETIME NOT NULL,
    date_end DATETIME,
    church_id INT,
    status_id INT,
    FOREIGN KEY (church_id) REFERENCES church(id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE SET NULL
);

-- Create the 'member' table (now references roles and status)
CREATE TABLE IF NOT EXISTS member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    main_instrument VARCHAR(255),
    secondary_instruments VARCHAR(255),
    church_id INT,
    role_id INT,
    status_id INT,
    FOREIGN KEY (church_id) REFERENCES church(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE SET NULL
);

-- Crear la tabla 'auth_methods' para definir los métodos de autenticación disponibles
CREATE TABLE IF NOT EXISTS auth_methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    method ENUM('password', 'google') NOT NULL
);

-- Actualizar la tabla 'user_password' para soportar múltiples métodos de autenticación
CREATE TABLE IF NOT EXISTS user_accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255), -- Será NULL si el método de autenticación es Google
    google_id VARCHAR(255), -- Será NULL si el método de autenticación es password
    auth_method_id INT NOT NULL,
    member_id INT,
    token VARCHAR(255), -- Usado para la recuperación de contraseñas o sesiones
    FOREIGN KEY (auth_method_id) REFERENCES auth_methods(id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES member(id) ON DELETE SET NULL
);

-- Insertar los métodos de autenticación disponibles
INSERT INTO auth_methods (method) VALUES ('password'), ('google');


-- Create the 'member_group' (junction table between member and groups)
CREATE TABLE IF NOT EXISTS member_group (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    group_id INT,
    FOREIGN KEY (member_id) REFERENCES member(id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES `group`(id) ON DELETE CASCADE
);

-- Create the 'songs' table (now references the status table)
CREATE TABLE IF NOT EXISTS songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    song_key VARCHAR(50),
    url_original VARCHAR(255),
    path_lyrics VARCHAR(255),
    path_chords_american VARCHAR(255),
    path_chords_roman VARCHAR(255),
    church_id INT,
    status_id INT,
    FOREIGN KEY (church_id) REFERENCES church(id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE SET NULL
);

-- Create the 'meeting' table (now references the status table)
CREATE TABLE IF NOT EXISTS meeting (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    meeting_day DATE,
    date_time DATETIME,
    church_id INT,
    status_id INT,
    FOREIGN KEY (church_id) REFERENCES church(id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE SET NULL
);

-- Create the 'meeting_group' (junction table between meeting and group)
CREATE TABLE IF NOT EXISTS meeting_group (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meeting_id INT,
    group_id INT,
    church_id INT,
    status_id INT,
    FOREIGN KEY (meeting_id) REFERENCES meeting(id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES `group`(id) ON DELETE CASCADE,
    FOREIGN KEY (church_id) REFERENCES church(id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE SET NULL
);

