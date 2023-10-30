// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BadReception, Project, Blog, Agency, School, MiscCertification, Bio, AWSCertification } = initSchema(schema);

export {
  BadReception,
  Project,
  Blog,
  Agency,
  School,
  MiscCertification,
  Bio,
  AWSCertification
};