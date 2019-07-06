<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function ($extConfString) {

        // Default bsdist page TSconfig
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:pnbase/Configuration/TypoScript/tsconfig.ts">');
		
		$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:pnbase/Configuration/TypoScript/custom.yaml';

    },$_EXTCONF
);

?>