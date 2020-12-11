import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types';
import * as edgewareDefinitions from '../interfaces/definitions';

const edgTypes = Object
  .values(edgewareDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...edgTypes,
  // aliases that don't do well as part of interfaces
  'voting::VoteType': 'VoteType',
  'voting::TallyType': 'TallyType',
  'voting::Tally': 'VotingTally',
  'Address': 'MultiAddress',
  'LookupSource': 'MultiAddress',
};

const typesAlias: Record<string, OverrideModuleType> = {
  voting: { Tally: 'VotingTally' },
}

export default {
  types, typesAlias
};
