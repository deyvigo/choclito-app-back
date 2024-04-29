import { Database } from 'sqlite3'
import { resolve } from 'path'

const path = resolve(__dirname, '../db/choclito.db')

export const db = new Database(path)

db.serialize(() => {
  db.run(
    `
    create table if not exists user
    (
      id_user   integer primary key autoincrement,
      username  varchar(30)  not null,
      password  varchar(100) not null,
      name      varchar(20)  not null,
      last_name varchar(20)  not null,
      birth_day date         not null,
      id_rol    integer      not null,
      constraint user_rol_id_rol_fk
        foreign key (id_rol) references rol (id_rol)
    );
    `
  )
  db.run(
    `
    create table if not exists rol
    (
      id_rol integer primary key autoincrement,
      name   varchar(30) not null
    );
    `
  )
  db.run(
    `
    create table if not exists date
    (
      id_date     integer primary key autoincrement,
      title       text not null,
      description text not null,
      day         date null,
      hour        time null
    );
    `
  )
  db.run(
    `
    create table if not exists user_date
    (
      id_user_date integer primary key autoincrement,
      id_user      integer     not null,
      id_date      integer     not null,
      asist        integer check (asist == 0 OR asist == 1),
      constraint user_date_date_id_date_fk
        foreign key (id_date) references date (id_date),
      constraint user_date_user_id_user_fk
        foreign key (id_user) references user (id_user)
    );
    `
  )
  db.all('SELECT * FROM rol;', [], function(err, rows) {
    if (rows.length == 0) {
      db.run(
        `
        INSERT INTO rol (name) VALUES ("ADMINISTRADOR"), ("USUARIO");
        `
      )
    }
  })
})
