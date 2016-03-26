-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Temps de generació: 26-03-2016 a les 12:53:38
-- Versió del servidor: 10.1.10-MariaDB
-- Versió de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `b2townapi`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `captions`
--

CREATE TABLE `captions` (
  `id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL,
  `caption` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `captions`
--

INSERT INTO `captions` (`id`, `photo_id`, `caption`, `created_at`, `updated_at`) VALUES
(1, 1, 'This a nice pic!', '2016-03-16 00:00:00', '2016-03-23 00:00:00'),
(2, 2, 'Another caption', '2016-03-10 00:00:00', '2016-03-16 00:00:00'),
(3, 2, 'Second caption', '2016-03-17 00:00:00', '2016-03-19 00:00:00'),
(4, 2, 'Gdhfjfjtjr', '2016-03-16 12:33:40', '2016-03-16 12:33:40'),
(5, 2, 'Hfjfhrhr', '2016-03-16 12:35:33', '2016-03-16 12:35:33'),
(6, 1, 'Hoi hoi', '2016-03-16 12:38:34', '2016-03-16 12:38:34'),
(7, 3, 'Didn''t ', '2016-03-17 10:18:17', '2016-03-17 10:18:17'),
(8, 4, 'Jejjee', '2016-03-17 14:04:39', '2016-03-17 14:04:39'),
(9, 12, 'Bdhdhfhfh', '2016-03-22 15:43:48', '2016-03-22 15:43:48'),
(10, 19, 'Fundido dusk funció help do Oz Co ', '2016-03-24 12:28:06', '2016-03-24 12:28:06'),
(11, 20, 'juju, jaja, jiji', '2016-03-24 15:16:58', '2016-03-24 15:16:58'),
(12, 20, 'second caption', '2016-03-24 15:17:07', '2016-03-24 15:17:07');

-- --------------------------------------------------------

--
-- Estructura de la taula `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `photos`
--

INSERT INTO `photos` (`id`, `location`, `created_at`, `updated_at`, `lat`, `lon`) VALUES
(19, 'http://b2town.sytes.net/laravel/B2town_server/public/uploads/08bcc148e211cfac00ddb0d203641c98.jpeg', '2016-03-24 11:35:56', '2016-03-24 11:35:56', '41.4741272', '2.0807464'),
(20, 'http://b2town.sytes.net/laravel/B2town_server/public/uploads/e6f4ea8e2c04467b680a7acb6c034e81.jpeg', '2016-03-24 11:36:13', '2016-03-24 11:36:13', '41.4741208', '2.0807411'),
(21, 'http://b2town.sytes.net/laravel/B2town_server/public/uploads/4ba3547f4c6bae73e78494c323f640bd.jpeg', '2016-03-24 11:36:23', '2016-03-24 11:36:23', '41.474108', '2.0807338');

--
-- Indexos per taules bolcades
--

--
-- Index de la taula `captions`
--
ALTER TABLE `captions`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `captions`
--
ALTER TABLE `captions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT per la taula `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
