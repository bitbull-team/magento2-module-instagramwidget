<?php

namespace Bitbull\InstagramWidget\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\App\Helper\Context;

class Config extends AbstractHelper
{

    const BASE_CONFIG_XML_PREFIX  = 'instagram/settings/%s';
    const INSTAGRAM_TOKEN         = 'instagram_token';
    const INSTAGRAML_USERID       = 'instagram_user_id';
    const INSTAGRAM_CHANNEL       = 'instagram_channel';
    const INSTAGRAM_NUMBER_PHOTOS = 'number_photos';

    /**
     * @param Context $context
     */
    public function __construct(Context $context)
    {
        parent::__construct($context);
    }

    /**
     * Return configuration param from module admin settings
     *
     * @param string $configField
     * @return mixed
     */
    public function getConfigParam($configField)
    {
        return $this->scopeConfig->getValue(
            sprintf(self::BASE_CONFIG_XML_PREFIX, $configField),
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

}
 