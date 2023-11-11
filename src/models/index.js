// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ItemStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const FeaturedStatus = {
  "FEATURED": "FEATURED",
  "NORMAL": "NORMAL"
};

const HeroAlignment = {
  "TOP": "TOP",
  "BOTTOM": "BOTTOM",
  "LEFT": "LEFT",
  "RIGHT": "RIGHT"
};

const HeroSize = {
  "THUMB": "THUMB",
  "FULL": "FULL",
  "ACTUA": "ACTUA",
  "HALF": "HALF"
};

const { Comment, BadReception, Project, Blog, Agency, School, MiscCertification, Bio, AWSCertification } = initSchema(schema);

export {
  Comment,
  BadReception,
  Project,
  Blog,
  Agency,
  School,
  MiscCertification,
  Bio,
  AWSCertification,
  ItemStatus,
  FeaturedStatus,
  HeroAlignment,
  HeroSize
};