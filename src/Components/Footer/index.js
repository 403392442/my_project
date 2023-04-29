import React from 'react'

import FooterSignUpEmail from './Components/Footer_sign_up_email'
import FooterQuickLinks from './Components/Footer_quick_links'
import FooterPolicyLinks from './Components/Footer_policy_links'

export default function Index() {
  return (
    <div>
        <FooterSignUpEmail />
        <FooterQuickLinks />
        <hr />
        <FooterPolicyLinks />
    </div>
  )
}
