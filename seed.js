CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    quote TEXT,
    title TEXT
  season INT,
  episode INT,

);
CREATE TABLE IF NOT EXISTS characters (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS episodes (
    id SERIAL PRIMARY KEY,
    title TEXT,
    season INT,
    episode INT
);
CREATE TABLE IF NOT EXISTS episodes_quotes (
    id SERIAL PRIMARY KEY,
    quote_id INT REFERENCES quotes(id),
    episode_id INT REFERENCES episodes(id),
    character_id INT REFERENCES characters(id)
);
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    quote_id INT REFERENCES quotes(id),
    post_date TIMESTAMP
);


CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
    username VARCHAR,
    location TEXT
);
INSERT INTO episodes (title, season, episode) VALUES
('Pilot', 1, 1),
('Diversity Day', 1, 2),
('Health Care', 1, 3),
('The Alliance', 1, 4),
('Basketball', 1, 5),
('Hot Girl', 1, 6),
('The Dundies', 2, 1),
('Sexual Harassment', 2, 2),
('Office Olympics', 2, 3),
('The Fire', 2, 4),
('Halloween', 2, 5),
('The Fight', 2, 6),
('Christmas Party', 2, 10),
('Booze Cruise', 2, 11),
('The Injury', 2, 12),
('The Secret', 2, 13),
('The Carpet', 2, 14),
('Boys and Girls', 2, 15),
('Valentine''s Day', 2, 16),
('Drug Testing', 2, 20),
('Casino Night', 2, 22),
('Gay Witch Hunt', 3, 1),
('The Convention', 3, 2),
('The Coup', 3, 3),
('Grief Counseling', 3, 4),
('Diwali', 3, 6),
('Branch Closing', 3, 7),
('The Merger', 3, 8),
('A Benihana Christmas', 3, 10),
('Back from Vacation', 3, 11),
('Traveling Salesmen', 3, 13),
('The Return', 3, 14),
('Ben Franklin', 3, 15),
('Product Recall', 3, 21),
('Beach Games', 3, 23),
('The Job', 3, 24),
('Fun Run', 4, 1),
('Dunder Mifflin Infinity', 4, 2),
('Launch Party', 4, 3),
('Money', 4, 4),
('Local Ad', 4, 5),
('Branch Wars', 4, 6),
('Survivor Man', 4, 7),
('The Deposition', 4, 8),
('Dinner Party', 4, 9),
('Chair Model', 4, 14),
('Job Fair', 4, 17);
('Goodbye Toby' 4, 18-19);
('Weight Loss', 5, 1);
('Business Ethics', 5, 2);
('Baby Shower', 5, 4);
('Crime Aid', 5, 5);
('Employee Transfer', 5, 6);
('Customer Survey', 5, 7);
('Business Trip', 5, 8);
('Frame Toby', 5, 9);
('The Surplus', 5, 10);
('Moroccan Christmas', 5, 11);
('The Duel', 5, 12);
('Prince Family Paper', 5, 13);
('Stress Relief', 5, 14);
('Lecture Circuit: Part 1', 5, 16);
('Lecture Circuit: Part 2', 5, 17);
('Blood Drive', 5, 18);
('Golden Ticket', 5, 19);
('New Boss', 5, 20);
('Two Weeks', 5, 21);
('Dream Team', 5, 22);
('Michael Scott Paper Company', 5, 23);
('Heavy Competition', 5, 24);
('Broke', 5, 25);
('Casual Friday', 5, 26);
('Cafe Disco', 5, 27);
('Company Picnic', 5, 28);
('Gossip', 6, 1);
 ('The Meeting', 6, 2);
 ('The Promotion', 6, 3);
('Niagara', 6, 4);
 ('Mafia', 6, 6);
 ('The Lover', 6, 7);
 ('Koi Pond', 6, 8);
 ('Double Date', 6, 9);
 ('Murder', 6, 10);
('Shareholder Meeting', 6, 11);
 ('Scott''s Tots', 6, 12);
 ('Secret Santa', 6, 13);
 ('The Banker', 6, 14);
 ('Sabre', 6, 15);
 ('Manager and Salesman', 6, 16);
 ('The Delivery', 6, 17);
 ('St. Patrick''s Day', 6, 19);
 ('New Leads', 6, 20);
 ('Happy Hour', 6, 21);
 ('Secretary''s Day', 6, 22);
 ('Body Language', 6, 23);
('The Cover-Up', 6, 24);
 ('The Chump', 6, 25);
('Whistleblower', 6, 26);

 ('Nepotism', 7, 1);
 ('Counseling', 7, 2);
 ('Andy''s Play', 7, 3);
 ('Sex Ed', 7, 4);
 ('The Sting', 7, 5);
 ('Costume Contest', 7, 6);
 ('Christening', 7, 7);
 ('Viewing Party', 7, 8);
 ('WUPHF.com', 7, 9);
 ('China', 7, 10);
 ('Classy Christmas', 7, 11);
 ('Ultimatum', 7, 12);
 ('The Seminar', 7, 13);
 ('The Search', 7, 15);
 ('PDA', 7, 16);
 ('Threat Level Midnight', 7, 17);
 ('Todd Packer', 7, 18);
 ('Garage Sale', 7, 19);
 ('Training Day', 7, 20);
 ('Michael''s Last Dundies', 7, 21);
 ('Goodbye, Michael', 7, 22);
 ('The Inner Circle', 7, 23);
 ('Dwight K. Schrute, (Acting) Manager', 7, 24);
 ('Search Committee', 7, 25);

 ('The List', 8, 1);
 ('The Incentive', 8, 2);
 ('Lotto', 8, 3);
 ('Garden Party', 8, 4);
 ('Spooked', 8, 5);
 ('Doomsday', 8, 6);
 ('Pam''s Replacement', 8, 7);
 ('Gettysburg', 8, 8);
 ('Mrs. California', 8, 9);
 ('Christmas Wishes', 8, 10);
 ('Trivia', 8, 11);
 ('Pool Party', 8, 12);
 ('Jury Duty', 8, 13);
 ('Special Project', 8, 14);
 ('Tallahassee', 8, 15);
 ('After Hours', 8, 16);
 ('Test the Store', 8, 17);
 ('Last Day in Florida', 8, 18);
 ('Get the Girl', 8, 19);
 ('Welcome Party', 8, 20);
 ('Angry Andy', 8, 21);
 ('Fundraiser', 8, 22);
 ('Turf War', 8, 23);
 ('Free Family Portrait Studio', 8, 24);
 ('New Guys', 9, 1);

 ('Roy''s Wedding', 9, 2);
 ('Andy''s Ancestry', 9, 3);
 ('Work Bus', 9, 4);
 ('Here Comes Treble', 9, 5);
 ('The Boat', 9, 6);
 ('The Whale', 9, 7);
 ('The Target', 9, 8);
 ('Dwight Christmas', 9, 9);
 ('Lice', 9, 10);
 ('Suit Warehouse', 9, 11);
 ('Customer Loyalty', 9, 12);
 ('Junior Salesman', 9, 13);
 ('Vandalism', 9, 14);
 ('Couples Discount', 9, 15);
 ('Moving On', 9, 16);
 ('The Farm', 9, 17);
 ('Promos', 9, 18);
 ('Stairmageddon', 9, 19);
 ('Paper Airplane', 9, 20);
 ('Livin'' the Dream', 9, 21);
 ('A.A.R.M.', 9, 22);
('Finale', 9, 23);
 
INSERT INTO quotes (quote, character, title, season, episode) VALUES
('That''s what she said.', 'Michael Scott', 'Sexual Harassment', 2, 2),
('I''m not superstitious, but I am a little stitious.', 'Michael Scott', 'Fun Run', 4, 1),
('Bears. Beets. Battlestar Galactica.', 'Jim Halpert', 'Product Recall', 3, 21),
('I declare bankruptcy!', 'Michael Scott', 'Money', 4, 4),
('If I don''t have some cake soon, I might die.', 'Stanley Hudson', 'Survivor Man', 4, 7),
('I am Beyoncé, always.', 'Michael Scott', 'Prince Family Paper', 5, 13),
('You miss 100% of the shots you don''t take.', 'Wayne Gretzky', 'Basketball', 1, 5),
('Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', 'Michael Scott', 'The Dundies', 2, 1),
('I am running away from my responsibilities. And it feels good.', 'Michael Scott', 'Weight Loss', 5, 1),
('Sometimes I''ll start a sentence and I don''t even know where it''s going. I just hope I find it along the way.', 'Michael Scott', 'Michael Scott Paper Company', 5, 23),
('I''m not going to tell them about the downsizing. If a patient has cancer, you don''t tell them.', 'Michael Scott', 'Health Care', 1, 3),
('I''ve never been a kiss up. It''s just not how I operate.', 'Jim Halpert', 'Branch Wars', 4, 6),
('Dwight, you ignorant slut!', 'Michael Scott', 'Product Recall', 3, 21),
('It''s Britney, b*tch.', 'Michael Scott', 'Lecture Circuit: Part 1', 5, 16),
('The worst thing about prison was the dementors.', 'Michael Scott', 'The Convict', 3, 9),
('That''s what she said.', 'Michael Scott', 'The Return', 3, 14),
('I''m not superstitious, but I am a little stitious.', 'Michael Scott', 'Fun Run', 4, 1),

INSERT INTO posts (user_id, quote_id, post_date) VALUES
(1, 1, '2024-05-10'),
(2, 3, '2024-05-10'),
(3, 5, '2024-05-10');


INSERT INTO episodes_quotes (quote_id, episode_id, character_id) VALUES
(1, 8, 1),
(2, 38, 3),
(3, 18, 2),
(4, 41, 1),
(5, 43, 1);