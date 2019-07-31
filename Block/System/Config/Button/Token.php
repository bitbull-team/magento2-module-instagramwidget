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
   * Merchant Country Field Name
   *
   * @var string
   */
  protected $_clientId = 'bitbull_instagramwidget_configuration_instagram_client_id';

  /**
   * Get Merchant Country Field Name
   *
   * @return string
   */
  public function getClientIdField()
  {
    return $this->_clientId;
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
    return $this->getUrl('addbutton/listdata'); //hit controller by ajax call on button click.
  }
  /**
   * Get the button and scripts contents
   *
   * @param \Magento\Framework\Data\Form\Element\AbstractElement $element
   * @return string
   */
  protected function _getElementHtml(\Magento\Framework\Data\Form\Element\AbstractElement $element)
  {
    //$originalData = $element->getOriginalData();
    $this->addData(
      [
        'id'        => 'instagram_token_button',
        'button_label'     => 'Get Token',
        'onclick'   => 'javascript:check(); return false;'
      ]
    );
    return $this->_toHtml();
  }
}