/**
 * warpKRON — official on-chain registry (single source of truth)
 * Phase III demand-gated — contract pending deployment
 */
window.KRON_DATA = {
  token: {
    name: 'warpKRON',
    symbol: 'WARPKRON',
    network: 'Base',
    chainId: 8453,
    decimals: 18,
    totalSupply: '10,000,000,000',
    deployed: null,
    verified: false,
    phase: 'III',
    status: 'demand-gated'
  },
  contract: {
    pending: true,
    labelKey: 'registry.contractPending'
  },
  allocations: [],
  familyTokens: [
    {
      name: 'eKRON',
      symbol: 'EKRON',
      url: 'https://www.ekron.network/',
      host: 'www.ekron.network',
      phase: 'I',
      badge: 'gateway',
      descKey: 'family.ekronDesc'
    },
    {
      name: 'soviKRON',
      symbol: 'SOVIKRON',
      url: 'https://www.sovikron.com/',
      host: 'www.sovikron.com',
      phase: 'II',
      badge: 'queued',
      descKey: 'family.sovikronDesc'
    },
    {
      name: 'mineKRON',
      symbol: 'MINEKRON',
      url: 'https://www.minekron.com/',
      host: 'www.minekron.com',
      phase: 'II',
      badge: 'queued',
      descKey: 'family.minekronDesc'
    },
    {
      name: 'alviKRON',
      symbol: 'ALVIKRON',
      url: 'https://www.alvikron.com/',
      host: 'www.alvikron.com',
      phase: 'II',
      badge: 'queued',
      descKey: 'family.alvikronDesc'
    },
    {
      name: 'puriKRON',
      symbol: 'PURIKRON',
      url: 'https://www.purikron.com/',
      host: 'www.purikron.com',
      phase: 'III',
      badge: 'gated',
      descKey: 'family.purikronDesc'
    },
    {
      name: 'puppyKRON',
      symbol: 'PUPPYKRON',
      url: 'https://www.puppykron.com/',
      host: 'www.puppykron.com',
      phase: 'III',
      badge: 'gated',
      descKey: 'family.puppykronDesc'
    },
    {
      name: 'warpKRON',
      symbol: 'WARPKRON',
      url: 'https://www.warpkron.com/',
      host: 'www.warpkron.com',
      phase: 'III',
      badge: 'current',
      descKey: 'family.warpkronDesc'
    }
  ],
  officialChannels: [
    {
      labelKey: 'channels.warpkron',
      host: 'www.warpkron.com',
      url: 'https://www.warpkron.com/',
      descKey: 'channels.warpkronDesc'
    },
    {
      labelKey: 'channels.ekron',
      host: 'www.ekron.network',
      url: 'https://www.ekron.network/',
      descKey: 'channels.ekronDesc',
      external: true
    },
    {
      labelKey: 'channels.verify',
      host: 'www.warpkron.com/verify',
      url: 'https://www.warpkron.com/verify/',
      descKey: 'channels.verifyDesc'
    },
    {
      labelKey: 'channels.standard',
      host: 'www.warpkron.com/standard',
      url: 'https://www.warpkron.com/standard/',
      descKey: 'channels.standardDesc'
    },
    {
      labelKey: 'channels.family',
      host: 'www.warpkron.com/family',
      url: 'https://www.warpkron.com/family/',
      descKey: 'channels.familyDesc'
    },
    {
      labelKey: 'channels.program',
      host: 'www.ekron.network/program',
      url: 'https://www.ekron.network/program/',
      descKey: 'channels.programDesc',
      external: true
    },
    {
      labelKey: 'channels.sovikron',
      host: 'www.sovikron.com',
      url: 'https://www.sovikron.com/',
      descKey: 'channels.sovikronDesc',
      external: true
    },
    {
      labelKey: 'channels.minekron',
      host: 'www.minekron.com',
      url: 'https://www.minekron.com/',
      descKey: 'channels.minekronDesc',
      external: true
    },
    {
      labelKey: 'channels.alvikron',
      host: 'www.alvikron.com',
      url: 'https://www.alvikron.com/',
      descKey: 'channels.alvikronDesc',
      external: true
    },
    {
      labelKey: 'channels.purikron',
      host: 'www.purikron.com',
      url: 'https://www.purikron.com/',
      descKey: 'channels.purikronDesc',
      external: true
    },
    {
      labelKey: 'channels.puppykron',
      host: 'www.puppykron.com',
      url: 'https://www.puppykron.com/',
      descKey: 'channels.puppykronDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkGroup',
      host: 'www.tvk.group',
      url: 'https://www.tvk.group/',
      descKey: 'channels.tvkGroupDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkCorp',
      host: 'www.t-v-k.com',
      url: 'https://www.t-v-k.com/',
      descKey: 'channels.tvkCorpDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkLabs',
      host: 'www.tvklabs.com',
      url: 'https://www.tvklabs.com/',
      descKey: 'channels.tvkLabsDesc',
      external: true
    },
    {
      labelKey: 'channels.entelekronOrg',
      host: 'www.entelekron.org',
      url: 'https://www.entelekron.org/',
      descKey: 'channels.entelekronOrgDesc',
      external: true
    },
    {
      labelKey: 'channels.entelekronIo',
      host: 'www.entelekron.io',
      url: 'https://www.entelekron.io/',
      descKey: 'channels.entelekronIoDesc',
      external: true
    },
    {
      labelKey: 'channels.sovraNetwork',
      host: 'www.sovra.network',
      url: 'https://www.sovra.network/',
      descKey: 'channels.sovraNetworkDesc',
      external: true
    },
    {
      labelKey: 'channels.sovraProtocol',
      host: 'www.sovraprotocol.com',
      url: 'https://www.sovraprotocol.com/',
      descKey: 'channels.sovraProtocolDesc',
      external: true
    }
  ]
};
