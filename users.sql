-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 21, 2019 at 09:58 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login1`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text,
  `last_name` text,
  `email` text,
  `password` text,
  `created` text,
  `pubkey` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`, `pubkey`) VALUES
(1, 'bob', 'bob', 'bob@bob.com', '$2b$10$.8OQyWyyQ88idnw2YF1/2.t7zu4/mjsOCNhjLJg5CHNIsJ9pDk1YC', '2019-03-20 20:01:06', ''),
(2, 'tim', 'tim', 'tim@tim.com', '$2b$10$zoyUce5AAOreQxGbHT7bHOk1xt6GqUuFeWXLNFc6gwAWCfJuSt0yu', '2019-03-21 12:51:26', '0x33e770e1516c31f6972da73d755247407119f4fb'),
(3, 'bob', 'bob', 'bob1@bob.com', '$2b$10$0uGpkvLY2l0KlYhVCp7HRuMyRnLLdZa7F8DTJ6x48HUiM6U5zs3Eq', '2019-03-21 15:51:37', '0x009aa9ffeff789ff630b68feeb7a4d9eabc51108');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
