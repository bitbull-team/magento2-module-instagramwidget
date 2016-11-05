<?php

namespace Bitbull\InstagramWidget\Block;

use Bitbull\InstagramWidget\Helper\Config as InstagramConfig;
use Magento\Framework\View\Element\Template\Context;

class Instagram extends \Magento\Framework\View\Element\Template
{
    /**
     * @var Context
     */
    protected $context;
    /**
     * @var InstagramConfig
     */
    protected $configHelper;

    /**
     * @param Context         $context
     * @param InstagramConfig $configHelper
     */
    public function __construct(
        Context $context,
        InstagramConfig $configHelper
    ) {
        parent::__construct($context);
        $this->configHelper = $configHelper;
    }

    /**
     * Returns Instagram config
     *
     * @return array
     */
    public function getConfig()
    {
        return [
            'token'      => $this->_getInstagramToken(),
            'userid'     => $this->_getInstagramUserId(),
            'channel'    => $this->_getInstagramChannel(),
            'num_photos' => $this->_getInstagramNumberPhotos()
        ];
    }

    /**
     * Instagram Token.
     *
     * @return string
     */
    protected function _getInstagramToken()
    {
        return (string) $this->escapeHtml($this->configHelper->getConfigParam(InstagramConfig::INSTAGRAM_TOKEN));
    }

    /**
     * Instagram User ID.
     *
     * @return string Cast int config value to string
     */
    protected function _getInstagramUserId()
    {
        return (string) $this->configHelper->getConfigParam(InstagramConfig::INSTAGRAM_USERID);
    }

    /**
     * Instagram Channel Title.
     *
     * @return string
     */
    protected function _getInstagramChannel()
    {
        return (string) $this->escapeHtml($this->configHelper->getConfigParam(InstagramConfig::INSTAGRAM_CHANNEL));
    }

    /**
     * Number of Instagram photos.
     *
     * @return string Cast int config value to string
     */
    protected function _getInstagramNumberPhotos()
    {
        return (string) $this->configHelper->getConfigParam(InstagramConfig::INSTAGRAM_NUMBER_PHOTOS);
    }

}