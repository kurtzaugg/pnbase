<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'PromptNet Base',
    'description' => 'The Base Extension for PromptNet Projects',
    'category' => 'misc',
    'author' => 'Kurt Zaug',
    'author_company' => 'PromptNet GmbH',
    'author_email' => 'k.zaugg@promptnet.ch',
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.9.99',
        ],
    ],
];