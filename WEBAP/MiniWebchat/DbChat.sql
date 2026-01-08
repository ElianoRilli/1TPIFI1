create or replace database MiniWebchat;

use MiniWebchat;

create table Users(
    UserID int not null auto_increment primary key,
    UserName varchar(50) not null unique
);

create table Messages(
    MessageID int not null auto_increment primary key,
    MessageText varchar(500),
    UserID int not null,
    foreign key (UserID) references Users(UserID)
);