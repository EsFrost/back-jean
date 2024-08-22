DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    postedAt DATE NOT NULL,
    message TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    picture VARCHAR(255),
    categoryId INT NOT NULL,
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
);