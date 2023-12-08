-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql11.freesqldatabase.com
-- Czas generowania: 08 Lis 2023, 15:34
-- Wersja serwera: 5.5.62-0ubuntu0.14.04.1
-- Wersja PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sql11660279`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Dostępy`
--

CREATE TABLE `Dostępy` (
  `ID` int(11) NOT NULL,
  `Login` varchar(50) NOT NULL,
  `Hasło` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Lekarze`
--

CREATE TABLE `Lekarze` (
  `ID` int(11) NOT NULL,
  `Imię` varchar(50) NOT NULL,
  `Nazwisko` varchar(50) NOT NULL,
  `Specjalizacja` varchar(50) NOT NULL,
  `Numer_telefonu` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Pacjenci`
--

CREATE TABLE `Pacjenci` (
  `ID` int(15) NOT NULL,
  `Imię` varchar(50) NOT NULL,
  `Nazwisko` varchar(50) NOT NULL,
  `PESEL` int(11) NOT NULL,
  `E-mail` varchar(100) NOT NULL,
  `Numer_telefonu` int(15) NOT NULL,
  `Adres` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Rejestratorzy`
--

CREATE TABLE `Rejestratorzy` (
  `ID` int(15) NOT NULL,
  `Imię` varchar(50) NOT NULL,
  `Nazwisko` varchar(50) NOT NULL,
  `Numer_telefonu` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Usługi`
--

CREATE TABLE `Usługi` (
  `ID` int(15) NOT NULL,
  `Rodzaj` varchar(50) NOT NULL,
  `ID_lekarskie` int(15) NOT NULL,
  `Cena` decimal(10,2) NOT NULL,
  `Czas_trwania` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Wizyty`
--

CREATE TABLE `Wizyty` (
  `ID` int(15) NOT NULL,
  `PESEL_pacjenta` int(11) NOT NULL,
  `ID_pacjenta` int(15) NOT NULL,
  `ID_lekarskie` int(15) NOT NULL,
  `ID_usługi` int(15) NOT NULL,
  `Data` date NOT NULL,
  `Godzina` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Finansowanie` enum('NFZ','Benefit System','Prywatnie','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `Dostępy`
--
ALTER TABLE `Dostępy`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Lekarze`
--
ALTER TABLE `Lekarze`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Pacjenci`
--
ALTER TABLE `Pacjenci`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Rejestratorzy`
--
ALTER TABLE `Rejestratorzy`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Usługi`
--
ALTER TABLE `Usługi`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_lekarskie` (`ID_lekarskie`);

--
-- Indexes for table `Wizyty`
--
ALTER TABLE `Wizyty`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_lekarskie` (`ID_lekarskie`),
  ADD KEY `ID_pacjenta` (`ID_pacjenta`),
  ADD KEY `ID_usługi` (`ID_usługi`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `Usługi`
--
ALTER TABLE `Usługi`
  ADD CONSTRAINT `Usługi_ibfk_1` FOREIGN KEY (`ID_lekarskie`) REFERENCES `Lekarze` (`ID`);

--
-- Ograniczenia dla tabeli `Wizyty`
--
ALTER TABLE `Wizyty`
  ADD CONSTRAINT `Wizyty_ibfk_3` FOREIGN KEY (`ID_usługi`) REFERENCES `Usługi` (`ID`),
  ADD CONSTRAINT `Wizyty_ibfk_1` FOREIGN KEY (`ID_lekarskie`) REFERENCES `Lekarze` (`ID`),
  ADD CONSTRAINT `Wizyty_ibfk_2` FOREIGN KEY (`ID_pacjenta`) REFERENCES `Pacjenci` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
