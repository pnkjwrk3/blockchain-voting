-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 27, 2019 at 11:45 PM
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
(3, 'bob', 'bob', 'bob1@bob.com', '$2b$10$0uGpkvLY2l0KlYhVCp7HRuMyRnLLdZa7F8DTJ6x48HUiM6U5zs3Eq', '2019-03-21 15:51:37', '0x009aa9ffeff789ff630b68feeb7a4d9eabc51108'),
(4, 'suraj', 'suraj', 'suraj@suraj.com', '$2b$10$kawFp17.ENkisPtZBs1V2.fiSn4Oeu.h5ov9wVdELmSlKxBiGPGem', '2019-03-22 07:05:07', '0x13fe1e9915c0de05ae826b21975a9651fdf40ee0'),
(5, 'suda', 'chav', 'sud@sud.com', '$2b$10$csVgegqjBpQSwt7HM2f92e4zB1/b2h7NnjFEjxitmoBkW78luhR3K', '2019-03-22 07:07:46', '0x59e656f52147b78f8b25e20332d37eb1955bff34'),
(6, 'pnkj', 'pnkj', 'pnk@pnk.com', '$2b$10$kR2g/mprDVZvh6l85NKsoe1.2x7JwCDli9wGaBS92t2oVLSXmJbES', '2019-03-22 21:35:04', '0xf2a40961224899ef0e6435dd178a3dedae08b223'),
(7, 'virat', 'kohli', 'virat@kohli.com', '$2b$10$pdm6u3ZHqk6YDFPf7i2BNeuX9zAEAw4OwEVJvUUjmGvWm.R.7ta/6', '2019-03-23 05:55:03', '0x183e12bb02e656f0f61ac2cc9051a0c179c83308'),
(8, 'sachi', 'tend', 'sachin@tend.com', '$2b$10$R1rAbhdlET.UqCOqQh13.OVQQw.NOrH7BTp8ilTEbJDA5JmCQGT2y', '2019-03-23 08:26:08', '0x1410c606e1d63fb2a35a089feef59ef2210f2a4f');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
