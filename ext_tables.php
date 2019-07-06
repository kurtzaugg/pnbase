<?php
defined('TYPO3_MODE') || die('Access denied.');


// default typoscript configuration
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'PromptNet Base TS'); 