create table if not exists date
(
    id_date     int auto_increment
        primary key,
    title       text not null,
    description text not null,
    day         date null,
    hour        time null
);

create table if not exists rol
(
    id_rol int auto_increment
        primary key,
    name   varchar(30) not null
);

create table if not exists user
(
    id_user   int auto_increment
        primary key,
    username  varchar(30)  not null,
    password  varchar(100) not null,
    name      varchar(20)  not null,
    last_name varchar(20)  not null,
    birth_day date         not null,
    id_rol    int          not null,
    constraint user_rol_id_rol_fk
        foreign key (id_rol) references rol (id_rol)
);

create table if not exists user_date
(
    id_user_date int auto_increment
        primary key,
    id_user      int     not null,
    id_date      int     not null,
    asist        tinyint null,
    constraint user_date_date_id_date_fk
        foreign key (id_date) references date (id_date),
    constraint user_date_user_id_user_fk
        foreign key (id_user) references user (id_user)
);
