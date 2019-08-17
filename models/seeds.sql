use game_db;
insert into games (charname, loggedin, gamestate, createdAt, updatedAt)
values ("test", 0, 0, 0, 0);

insert into charStats (HP, Str, Dex, createdAt, updatedAt)
values (10, 1, 1, 0, 0);

insert into game_states (inbattle, menu, createdAt, updatedAt)
values (0, 0, 0, 0);

insert into logins (username, password, createdAt, updatedAt)
values ("test", "test", 0, 0);