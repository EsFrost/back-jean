-- Insert categories
INSERT INTO categories (label) VALUES
('Travel'),
('Food'),
('Technology'),
('Sports'),
('Music');

-- Insert posts
INSERT INTO posts (author, postedAt, message, latitude, longitude, picture, categoryId) VALUES
('John Doe', '2024-08-22', 'Exploring the beautiful beaches of Bali!', -8.409518, 115.188919, 'bali_beach.jpg', 1),
('Jane Smith', '2024-08-21', 'Just tried the most amazing sushi in Tokyo!', 35.6762, 139.6503, 'tokyo_sushi.jpg', 2),
('Mike Johnson', '2024-08-20', 'Reviewing the latest smartphone. It\'s a game-changer!', 37.7749, -122.4194, 'new_smartphone.jpg', 3),
('Emily Brown', '2024-08-19', 'Caught the winning touchdown at the Super Bowl!', 33.7465, -84.3882, 'super_bowl.jpg', 4),
('David Lee', '2024-08-18', 'Rocking out at the Glastonbury Festival!', 51.1592, -2.5857, 'glastonbury.jpg', 5),
('Sarah Wilson', '2024-08-17', 'Hiking the Inca Trail to Machu Picchu. Breathtaking views!', -13.1631, -72.5450, 'machu_picchu.jpg', 1),
('Alex Turner', '2024-08-16', 'Discovered a hidden gem of a café in Paris.', 48.8566, 2.3522, 'paris_cafe.jpg', 2),
('Lisa Chen', '2024-08-15', 'Just attended an AI conference. The future is now!', 40.7128, -74.0060, 'ai_conference.jpg', 3),
('Tom Baker', '2024-08-14', 'Witnessed an epic tennis match at Wimbledon today.', 51.4340, -0.2147, 'wimbledon.jpg', 4),
('Emma Watson', '2024-08-13', 'Backstage at the Grammy Awards. So much talent here!', 34.0522, -118.2437, 'grammy_awards.jpg', 5);

---
SELECT * FROM posts p 
JOIN categories c ON p.categoryId = c.id
WHERE p.id = ?;

SELECT * FROM categories;

---
SELECT * FROM posts p 
JOIN categories c ON p.categoryId = c.id;

---
INSERT INTO posts (author, postedAt, message, latitude, longitude, picture, categoryId) VALUES
(?, ?, ?, ?, ?, ?, ?);

INSERT INTO categories (label) VALUES
(?);

---
UPDATE posts SET author = ?, postedAt = ?, message = ?, latitude = ?, longitude = ?, picture = ?, categoryId = ? WHERE id = ?;

---
DELETE FROM posts WHERE id = ?;

DELETE FROM categories WHERE id = ?;