// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ItemStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const ProjectLocation = {
  "NYC": "NYC",
  "WASHDC": "WASHDC",
  "SF": "SF",
  "CHICAGO": "CHICAGO",
  "PHILADELPHIA": "PHILADELPHIA",
  "ATLANTA": "ATLANTA"
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
  ProjectLocation,
  FeaturedStatus,
  HeroAlignment,
  HeroSize
};