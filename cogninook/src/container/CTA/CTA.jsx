import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Let's Transform Your Workspace Today!</h3>

<p className="pt-2 pb-4">Contact us now to discover how CogniNook's innovative solutions can revolutionize your work environment. Elevate your productivity and experience the future of personalized workspaces.</p>
<buton className="btn-positivus">Unlock a new era of workspace</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA