export default {
  rpc: {
    treeLeaves: {
      description: 'Query for the tree leaves',
      params: [
        {
          name: 'tree_id',
          type: 'u32',
          isOptional: false
        },
        {
          name: 'from',
          type: 'u32',
          isOptional: false
        },
        {
          name: 'to',
          type: 'u32',
          isOptional: false
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: 'Vec<[u8; 32]>'
    }
  },
  types: {
    HashFunction: {
      _enum: ['PoseidonDefault', 'PoseidonExp3', 'PoseidonExp5', 'PoseidonExp17', 'MiMC', 'Blake2', 'Sha256']
    },
    TreeId: 'u32',
    Manager: {
      accountId: 'AccountId',
      required: 'bool'
    },
    MerkleTree: {
      leaf_count: 'u32',
      max_leaves: 'u32',
      depth: 'u8',
      root_hash: 'ScalarData',
      edge_nodes: 'Vec<ScalarData>',
      hasher: 'HashFunction',
      should_store_leaves: 'bool'
    },
    CurrencyId: 'u64',
    Amount: 'i128',
    AmountOf: 'Amount',
    BlockLength: 'u64',
    CurrencyIdOf: 'CurrencyId',
    /// Scalar data type for field elements, 32 bytes are needed
    ScalarData: '[u8; 32]',
    /// Nullifiers for mixer deposits
    Nullifier: 'ScalarData',
    /// Commitment data type
    Commitment: 'ScalarData',
    MixerInfo: {
      /// Minimum duration the deposit has stayed in the mixer for a user
      minimum_deposit_length_for_reward: 'BlockNumber',
      /// Deposit size for the mixer
      fixed_deposit_size: 'Balance',
      /// Id of the currency in the mixer
      currency_id: 'CurrencyIdOf'
    },
    WithdrawProof: {
      /// The mixer id this withdraw proof corresponds to
      mixer_id: 'TreeId',
      /// The cached block for the cached root being proven against
      cached_block: 'BlockNumber',
      /// The cached root being proven against
      cached_root: 'ScalarData',
      /// The individual scalar commitments (to the randomness and nullifier)
      comms: 'Vec<Commitment>',
      /// The nullifier hash with itself
      nullifier_hash: 'ScalarData',
      /// The proof in bytes representation
      proof_bytes: 'Vec<u8>',
      /// The leaf index scalar commitments to decide on which side to hash
      leaf_index_commitments: 'Vec<Commitment>',
      /// The scalar commitments to merkle proof path elements
      proof_commitments: 'Vec<Commitment>',
      /// The recipient to withdraw amount of currency to
      recipient: 'Option<AccountId>',
      /// The recipient to withdraw amount of currency to
      relayer: 'Option<AccountId>'
    },
    BlockWeights: 'Vec<u8>',
    ChainId: 'u32'
  },
  typesAlias: {}
};