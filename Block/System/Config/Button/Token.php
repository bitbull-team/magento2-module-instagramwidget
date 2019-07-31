<?php
/**
 * Generate Instagram Token
 *
 * @copyright Copyright © 2019 Bitbull. All rights reserved.
 * @author    lorena.ramonda@bitbull.it
 */

namespace Bitbull\InstagramWidget\Block\System\Config\Button;

class Token extends \Magento\Config\Block\System\Config\Form\Field
{
  /**
   * Instagram Client Id Field Name
   *
   * @var string
   */
  protected $_clientId = 'bitbull_instagramwidget_configuration_instagram_client_id';
  /**
   * Instagram Client Secret Field Name
   *
   * @var string
   */
  protected $_clientSecret = 'bitbull_instagramwidget_configuration_instagram_client_secret';
  /**
   * Instagram User Id Field Name
   *
   * @var string
   */
  protected $_userId = 'bitbull_instagramwidget_configuration_instagram_user_id';
  /**
   * Instagram Token Field Name
   *
   * @var string
   */
  protected $_token = 'bitbull_instagramwidget_configuration_instagram_token';

  /**
   * Get Instagram Client Id Field Name
   *
   * @return string
   */
  public function getClientIdField()
  {
    return $this->_clientId;
  }

  /**
   * Get Instagram Client Secret Field Name
   *
   * @return string
   */
  public function getClientSecretField()
  {
    return $this->_clientSecret;
  }

  /**
   * Get Instagram User Id Field Name
   *
   * @return string
   */
  public function getUserIdField()
  {
    return $this->_userId;
  }

  /**
   * Get Instagram Token Field Name
   *
   * @return string
   */
  public function getTokenField()
  {
    return $this->_token;
  }

  /**
   * Set template to itself
   *
   * @return $this
   */
  protected function _prepareLayout()
  {
    parent::_prepareLayout();
    if (!$this->getTemplate()) {
      $this->setTemplate('system/config/button/token.phtml');
    }
    return $this;
  }
  /**
   * Render button
   *
   * @param  \Magento\Framework\Data\Form\Element\AbstractElement $element
   * @return string
   */
  public function render(\Magento\Framework\Data\Form\Element\AbstractElement $element)
  {
    // Remove scope label
    $element->unsScope()->unsCanUseWebsiteValue()->unsCanUseDefaultValue();
    return parent::render($element);
  }
  /**
   * Return ajax url for button
   *
   * @return string
   */
  public function getAjaxCheckUrl()
  {
    return $this->getUrl('instagramlogin/instagram/login'); //hit controller by ajax call on button click.
  }
  /**
   * Get the button and scripts contents
   *
   * @param \Magento\Framework\Data\Form\Element\AbstractElement $element
   * @return string
   */
  protected function _getElementHtml(\Magento\Framework\Data\Form\Element\AbstractElement $element)
  {
    $this->addData(
      [
        'id'            => 'instagram_token_button',
        'button_label'  => 'Get Token',
        'onclick'       => 'javascript:check(); return false;'
      ]
    );
    return $this->_toHtml();
  }
}