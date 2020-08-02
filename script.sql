--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-08-01 22:04:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2849 (class 1262 OID 33534)
-- Name: Superhero; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Superhero" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';


ALTER DATABASE "Superhero" OWNER TO postgres;

\connect "Superhero"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2839 (class 0 OID 33537)
-- Dependencies: 203
-- Data for Name: Superheroes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Superheroes" VALUES (2, 'Captain America', 'Стивен Роджерс', 'Герой вне времени Стив Роджерс борется за свободу в качестве непоколебимого Капитана Америка.', 'Наша цель... спасти как можно больше людей. Но спасти всех невозможно, и если не принять это как данность, в другой раз погибнут все.');
INSERT INTO public."Superheroes" VALUES (3, 'Ironman', 'Тони Старк', 'Эксцентричный гений, миллионер, дамский угодник и филантроп Тони Старк также является супергероем в броне, известным как Железный Человек.', 'Гений, миллиардер, плэйбой, филантроп.');
INSERT INTO public."Superheroes" VALUES (4, 'Thor', 'Тор Одинсон', 'Могущественный бог грома Тор, достойный носить величайшее оружие во вселенной – волшебный молот Мьёльнир — никогда не перестаёт сражаться за правое дело и защищать любимую Землю.', 'Я Тор, сын Одина, и покуда в груди моей бьётся сердце, я... не мастер долгих и занудных речей.');
INSERT INTO public."Superheroes" VALUES (5, 'Hulk', 'Брюс Бэннер', 'Спасая жизнь подростку, доктор Брюс Беннер оказался в эпицентре взрыва гамма-бомбы, после которого он обнаружил у себя необычные способности. Стоит кому-то разозлить или спровоцировать его, как он теряет контроль над собой и превращается в зелёного монстра Халка.', 'В этом и есть мой секрет, Кэп. Я зол постоянно.');
INSERT INTO public."Superheroes" VALUES (6, 'Black Widow', 'Наталья  Романова', 'Наташа Романофф, известная также как Черная Вдова, — эксперт в шпионаже и боевых искусствах. Наташа в течение долгого времени выполняла приказы КГБ, но позже стала одним из лучших агентов службы Щ.И.Т. и присоединилась к команде Мстителей.', 'Первое правило, когда подаешься в бега — не беги, а иди.');
INSERT INTO public."Superheroes" VALUES (7, 'Hawkeye', 'Клинтон  Бартон', 'Благодаря своей исключительной реакции, координации и меткости Соколиный Глаз — лучший стрелок и лучник, известный человечеству.', 'Мы сражаемся с роботами, а у меня — лук и стрелы!');
INSERT INTO public."Superheroes" VALUES (100, 'SLON', 'dsadsa', 'dasdasd', 'dasdasd');
INSERT INTO public."Superheroes" VALUES (99, 'Eagle', 'Yee', 'dsadasd', 'asdasda');
INSERT INTO public."Superheroes" VALUES (1, 'Spider-Man', 'Питер Паркер', 'Когда обычного подростка Питера Паркера укусил радиоактивный паук, его жизнь полностью изменилась. Теперь он борется с преступностью, скрываясь под маской Человека-Паука.', 'У всех есть тайны. Что-то скрываем мы, что-то скрывают от нас.');


--
-- TOC entry 2841 (class 0 OID 33559)
-- Dependencies: 205
-- Data for Name: Images; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Images" VALUES (1, 1, 'https://cdni.rt.com/russian/images/2019.08/article/5d5d38d11835617c7c8b459a.png');
INSERT INTO public."Images" VALUES (2, 1, 'https://u.kanobu.ru/editor/images/40/f8b4ad74-2198-4515-afed-dc2c2ac73561.jpg');
INSERT INTO public."Images" VALUES (3, 1, 'https://cdn.igromania.ru/mnt/news/3/7/e/f/4/1/77712/25bf9a7a71d2771f_848x477.jpg');
INSERT INTO public."Images" VALUES (4, 1, 'https://cdni.rt.com/russian/images/2019.06/article/5d18787a370f2c9e358b45b3.jpg');
INSERT INTO public."Images" VALUES (5, 2, 'https://topspiski.com/wp-content/uploads/2018/02/72f8778216155481bd799c5120a894d9-700x438.jpg');
INSERT INTO public."Images" VALUES (6, 2, 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/0_2.jpg');
INSERT INTO public."Images" VALUES (8, 2, 'https://img.gazeta.ru/files3/817/12009817/america-pic905-895x505-24780.jpg');
INSERT INTO public."Images" VALUES (9, 3, 'https://blog.playstation.com/tachyon/sites/11/2020/05/unnamed-file-2.jpg?resize=1088,500&crop_strategy=smart');
INSERT INTO public."Images" VALUES (10, 3, 'https://besthqwallpapers.com/Uploads/25-6-2019/97378/thumb2-ironman-4k-3d-art-dc-comics-iron-man.jpg');
INSERT INTO public."Images" VALUES (12, 4, 'https://www.screengeek.net/wp-content/uploads/2019/08/thor-love-and-thunder-1.jpg');
INSERT INTO public."Images" VALUES (13, 4, 'https://img.cinemablend.com/filter:scale/quill/f/4/c/7/2/8/f4c7285138674b054d01d8a4d9a8293dcc631e89.jpg?fw=1200');
INSERT INTO public."Images" VALUES (14, 4, 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2013/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg');
INSERT INTO public."Images" VALUES (15, 4, 'https://www.denofgeek.com/wp-content/uploads/2017/03/thor_ragnarok_natalie_portman-scaled.jpg?fit=2560%2C1618');
INSERT INTO public."Images" VALUES (16, 5, 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/04/Night-King-v-MCU-hulk-Cropped.jpg');
INSERT INTO public."Images" VALUES (18, 5, 'https://images.news18.com/ibnlive/uploads/2017/01/hulk.jpg');
INSERT INTO public."Images" VALUES (19, 5, 'https://img.cinemablend.com/filter:scale/quill/e/3/9/c/c/d/e39ccda33c12cdcbf8840e956299c8939b0bb4fb.jpg?fw=1200');
INSERT INTO public."Images" VALUES (20, 6, 'https://marvelblog.com/wp-content/uploads/2020/03/Black-Widow-Movie.jpg');
INSERT INTO public."Images" VALUES (21, 6, 'https://focus.ua/storage/pub/files/Files4/Black-Widow-001.jpg');
INSERT INTO public."Images" VALUES (22, 6, 'https://img.gameme.eu/images/obEwVyw92NhXMaZUyQTgze.jpg');
INSERT INTO public."Images" VALUES (23, 6, 'https://i.insider.com/5b2bbe121ae6623d008b4628?width=1100&format=jpeg&auto=webp');
INSERT INTO public."Images" VALUES (24, 7, 'https://cnet4.cbsistatic.com/img/dGRCHAdIfeevaIO3PPumCgneQ2Y=/940x0/2017/08/03/26d21d88-1244-4704-a426-7a09c2b7ece0/marvelinfinitywar-hawkeye.jpg');
INSERT INTO public."Images" VALUES (25, 7, 'https://cdn.nationeditions.com/wp-content/uploads/2020/07/avengers-endgame-why-hawkeye-cut-infinity-war-1181035-1280x0-2-696x366.jpeg');
INSERT INTO public."Images" VALUES (26, 7, 'https://images.immediate.co.uk/production/volatile/sites/3/2019/07/avengers-8bb66cd.jpg?quality=90&resize=620,413');
INSERT INTO public."Images" VALUES (7, 2, 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/05/Chris-Evans-as-Captain-America-in-the-Quantum-Realm.jpg');
INSERT INTO public."Images" VALUES (17, 5, 'https://images3.alphacoders.com/212/212607.jpg');
INSERT INTO public."Images" VALUES (11, 3, 'https://wallpaperaccess.com/full/1169261.jpg');
INSERT INTO public."Images" VALUES (28, 3, 'https://i.pinimg.com/originals/2d/6a/44/2d6a445168b9bfd5141d79f7257bea28.jpg');
INSERT INTO public."Images" VALUES (31, 7, 'https://mcuexchange.com/wp-content/uploads/2020/01/Hawkeye-Header.png');
INSERT INTO public."Images" VALUES (75, 99, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596285204/superheroes/idgt1xno4vdi3s8fmwpq.jpg');
INSERT INTO public."Images" VALUES (76, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596285716/superheroes/cm0neeogr6yvvqmhujj4.jpg');
INSERT INTO public."Images" VALUES (78, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596288754/superheroes/ntdeqxaxgaxtneado1xt.jpg');
INSERT INTO public."Images" VALUES (85, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596289127/superheroes/owsaf7wwxwacctxpypcv.jpg');
INSERT INTO public."Images" VALUES (97, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596301412/superheroes/cqen5apluzofmii6nlfg.jpg');
INSERT INTO public."Images" VALUES (99, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596301754/superheroes/befjnlc8vbmhsssxnfg7.jpg');
INSERT INTO public."Images" VALUES (100, 100, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596302537/superheroes/mg1az6fisnbxon0uhiov.jpg');
INSERT INTO public."Images" VALUES (101, 99, 'http://res.cloudinary.com/dcvrictqt/image/upload/v1596303584/superheroes/adgeoy83nsadeeliqgxs.jpg');


--
-- TOC entry 2843 (class 0 OID 33575)
-- Dependencies: 207
-- Data for Name: SuperPowers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."SuperPowers" VALUES (6, 1, 'Суперсила, Паучье чутье, Гениальный интеллект, Суперловкость, Повышенная регенерация');
INSERT INTO public."SuperPowers" VALUES (11, 2, 'Усиленные физические характеристики, Навыки рукопашного боя, Стратегическое мышление, Эксперт по военному делу, Превосходный атлет');
INSERT INTO public."SuperPowers" VALUES (17, 3, 'Гениальный интеллект, Выдающийся изобретатель и инженер, Мастер рукопашного боя, Обширные знания во многих областях науки, Большие финансовые возможности');
INSERT INTO public."SuperPowers" VALUES (24, 4, 'Нечеловеческая сила, Способность летать, Управление погодой, Повышенная выносливость, Волшебный молот Мьёльнир, Удлинённый период жизни');
INSERT INTO public."SuperPowers" VALUES (31, 5, 'Сверхразвитая мускулатура, Гениальный интеллект, Скорость и прочность, Адаптация к различным средам, Нечеловеческая выносливость, Сверхчеловеческая сила');
INSERT INTO public."SuperPowers" VALUES (37, 6, 'Владение боевыми искусствами, Замедленное старение, Усиленная иммунная защита, Владение навыками шпионажа, Превосходная спортивная форма, Улучшенные физические характеристики');
INSERT INTO public."SuperPowers" VALUES (40, 7, 'Феноменальная меткость, Арсенал из стрел с различными эффектами, Навыки в акробатике, воздушной гимнастике и рукопашному бою');
INSERT INTO public."SuperPowers" VALUES (59, 82, 'xvccvcvcv');
INSERT INTO public."SuperPowers" VALUES (75, 100, 'sdasdas');
INSERT INTO public."SuperPowers" VALUES (74, 99, 'asdasdasd');


--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 204
-- Name: Images_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Images_ID_seq"', 101, true);


--
-- TOC entry 2851 (class 0 OID 0)
-- Dependencies: 206
-- Name: SuperPowers_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."SuperPowers_ID_seq"', 75, true);


--
-- TOC entry 2852 (class 0 OID 0)
-- Dependencies: 202
-- Name: Superheroes_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Superheroes_ID_seq"', 100, true);


-- Completed on 2020-08-01 22:04:56

--
-- PostgreSQL database dump complete
--

