-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 26, 2018 at 06:48 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoice_db`
--
CREATE DATABASE IF NOT EXISTS `invoice_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `invoice_db`;

-- --------------------------------------------------------

--
-- Table structure for table `Invoices`
--

CREATE TABLE `Invoices` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tax` float DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Invoices`
--

INSERT INTO `Invoices` (`id`, `user_id`, `tax`, `discount`, `createdAt`, `updatedAt`) VALUES
(1, 1, 12.36, 10, '2018-07-24 16:20:49', '2018-07-24 16:20:49'),
(5, 4, 12.36, 10, '2018-07-24 16:44:42', '2018-07-24 16:44:42'),
(7, 6, 18, 10, '2018-07-24 17:37:44', '2018-07-24 17:37:44');

-- --------------------------------------------------------

--
-- Table structure for table `ItemInInvoices`
--

CREATE TABLE `ItemInInvoices` (
  `id` int(11) NOT NULL,
  `InvoiceId` int(11) DEFAULT NULL,
  `ItemId` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ItemInInvoices`
--

INSERT INTO `ItemInInvoices` (`id`, `InvoiceId`, `ItemId`, `quantity`) VALUES
(1, 1, 1, 4),
(2, 1, 4, 2),
(3, 1, 3, 1),
(4, 5, 7, 1),
(5, 5, 8, 2),
(8, 7, 11, 2),
(9, 7, 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Items`
--

CREATE TABLE `Items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Items`
--

INSERT INTO `Items` (`id`, `name`, `price`) VALUES
(1, 'item 1', 120),
(2, 'item 2', 200),
(3, 'item 3', 100),
(4, 'item 4', 200),
(7, 'Biriyani', 160),
(8, 'Rezala', 110),
(11, 'Chicken', 100),
(12, 'Mutton', 120);

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20180723212259-create-invoice.js'),
('20180723212749-create-user.js'),
('20180723213027-create-item.js'),
('20180723213155-create-item-in-invoice.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `email`, `pincode`, `phone`, `address`) VALUES
(1, 'aritra', 'aritra@gmail.com', NULL, NULL, NULL),
(4, 'user1', 'user1@user.com', NULL, NULL, NULL),
(6, 'test1', 'test1@isp.org', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Invoices`
--
ALTER TABLE `Invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ItemInInvoices`
--
ALTER TABLE `ItemInInvoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Items`
--
ALTER TABLE `Items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Invoices`
--
ALTER TABLE `Invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ItemInInvoices`
--
ALTER TABLE `ItemInInvoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Items`
--
ALTER TABLE `Items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
