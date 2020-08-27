DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;
PRAGMA foreign_keys = ON;

-- User who asked
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);
-- Question being asked
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);
-- link to question and any user
CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    parent_id INTEGER,
    subject_id INTEGER NOT NULL,
    replier_id INTEGER NOT NULL,
    body TEXT NOT NULL,

    FOREIGN KEY(parent_id) REFERENCES replies(id),
    FOREIGN KEY(subject_id) REFERENCES questions(id),
    FOREIGN KEY(replier_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    user_like_id INTEGER NOT NULL,
    question_like_id INTEGER NOT NULL,

    FOREIGN KEY(user_like_id) REFERENCES users(id),
    FOREIGN KEY(question_like_id) REFERENCES questions(id)
);

INSERT INTO
    users(fname, lname)
VALUES
    ('Brian', 'Bowen');

INSERT INTO
    users (fname, lname)
VALUES
    ('Eric', 'Xian');


INSERT INTO
    questions(title, body, author_id)
VALUES
    ('SQL HELP URGENT', 'help me!!!!', (SELECT users.id FROM users WHERE fname = 'Brian' AND lname = 'Bowen'));

INSERT INTO
    questions
    (title, body, author_id)
VALUES
    ('Ruby gem help', 'not working', (SELECT users.id FROM users WHERE fname = 'Eric' AND lname = 'Xian'));

