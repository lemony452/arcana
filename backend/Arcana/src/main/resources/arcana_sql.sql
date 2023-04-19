drop database if exists arcana_db;
create database arcana_db;
use arcana_db;

create table user(
	uid varchar(50),
    token varchar(50) not null,
    provider varchar(50) not null,
    email varchar(50) not null,
    nickname varchar(50) not null,
	report_count int not null,

	CONSTRAINT uid primary key(uid)
);

create table diary(
	didx int auto_increment,
    uid_user varchar(50) not null,
    dcontent varchar(5000) not null,
    ddate date not null,
    
    CONSTRAINT didx primary key(didx),
    CONSTRAINT uid foreign key(uid_user) REFERENCES user(uid)
);

create table report(
	didx_diary int not null,
    uid_user varchar(50) not null,
    card_list json,
    card_res_list json,
    question varchar(1000),
    answer varchar(1000),
    
    CONSTRAINT didx foreign key(didx_diary) REFERENCES diary(didx),
    CONSTRAINT uid_r foreign key(uid_user) REFERENCES user(uid)
);

create table major_card(
	major_idx int auto_increment,
    major_num int not null,
    major_dir boolean not null,
    major_keyword json not null,
    major_description varchar(1000) not null,
    major_karma varchar(1000) not null,
    
    CONSTRAINT major_idx primary key(major_idx)
);

create table minor_card(
	minor_idx int auto_increment,
    minor_symbol int not null,
    minor_num int not null,
    minor_dir boolean not null,
    minor_keyword json not null,
    minor_description varchar(1000) not null,
    
    CONSTRAINT minor_idx primary key(minor_idx)
);