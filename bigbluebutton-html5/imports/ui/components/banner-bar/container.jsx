import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';
import BannerComponent from './component';

export default withTracker(() => ({
  color: Session.get('bannerColor') || '#D7590F',
  text: Session.get('bannerText') || '',
}))(BannerComponent);
