const data = [
  {
    week: 1,
    tier: 10,
    games: [
      {
        opponent: 'Sext-Men',
        teamScore: 11,
        opponentScore: 25
      },
      {
        opponent: 'Sext-Men',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Big Digs',
        teamScore: 18,
        opponentScore: 25
      },
      {
        opponent: 'Big Digs',
        teamScore: 23,
        opponentScore: 25
      }
    ]
  },
  {
    week: 2,
    tier: 11,
    games: [
      {
        opponent: 'Saved by the Balls',
        teamScore: 25,
        opponentScore: 10
      },
      {
        opponent: 'Saved by the Balls',
        teamScore: 26,
        opponentScore: 27
      },
      {
        opponent: 'Daddy Issues',
        teamScore: 25,
        opponentScore: 18
      },
      {
        opponent: 'Daddy Issues',
        teamScore: 15,
        opponentScore: 25
      }
    ]
  },
  {
    week: 3,
    tier: 11,
    games: [
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 16
      },
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 10
      },
      {
        opponent: 'Digma Balls',
        teamScore: 25,
        opponentScore: 13
      },
      {
        opponent: 'Digma Balls',
        teamScore: 25,
        opponentScore: 22
      }
    ]
  },
  {
    week: 4,
    tier: 10,
    games: [
      {
        opponent: 'Daddy Issues',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Daddy Issues',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'Late to the Game',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'Late to the Game',
        teamScore: 25,
        opponentScore: 19
      }
    ]
  },
  {
    week: 5,
    tier: 9,
    games: [
      {
        opponent: 'Big Digs',
        teamScore: 13,
        opponentScore: 25
      },
      {
        opponent: 'Big Digs',
        teamScore: 17,
        opponentScore: 25
      },
      {
        opponent: 'Set on my Face',
        teamScore: 15,
        opponentScore: 25
      },
      {
        opponent: 'Set on my Face',
        teamScore: 13,
        opponentScore: 25
      }
    ]
  },
  {
    week: 6,
    tier: 9,
    games: [
      {
        opponent: 'Big Digs',
        teamScore: 25,
        opponentScore: 17
      },
      {
        opponent: 'Big Digs',
        teamScore: 25,
        opponentScore: 20
      },
      {
        opponent: 'Late to the Game',
        teamScore: 16,
        opponentScore: 25
      },
      {
        opponent: 'Late to the Game',
        teamScore: 25,
        opponentScore: 22
      }
    ]
  },
  {
    week: 7,
    tier: 8,
    games: [
      {
        opponent: 'Block Destroyers',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'Block Destroyers',
        teamScore: 23,
        opponentScore: 25
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 25,
        opponentScore: 21
      }
    ]
  },
  {
    week: 8,
    tier: 8,
    games: [
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 26,
        opponentScore: 24
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'Set on my Face',
        teamScore: 25,
        opponentScore: 16
      },
      {
        opponent: 'Set on my Face',
        teamScore: 20,
        opponentScore: 25
      }
    ]
  },
  {
    week: 9,
    tier: 7,
    games: [
      {
        opponent: 'My Dumps',
        teamScore: 15,
        opponentScore: 25
      },
      {
        opponent: 'My Dumps',
        teamScore: 21,
        opponentScore: 25
      },
      {
        opponent: 'Believe That',
        teamScore: 25,
        opponentScore: 23
      },
      {
        opponent: 'Believe That',
        teamScore: 23,
        opponentScore: 25
      }
    ]
  },
  {
    week: 10,
    tier: 8,
    games: [
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 14,
        opponentScore: 25
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 27,
        opponentScore: 25
      },
      {
        opponent: 'Set on my Face',
        teamScore: 18,
        opponentScore: 25
      },
      {
        opponent: 'Set on my Face',
        teamScore: 18,
        opponentScore: 25
      }
    ]
  },
  {
    week: 11,
    tier: 9,
    games: [
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 12
      },
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 18
      },
      {
        opponent: 'Sext-Men',
        teamScore: 27,
        opponentScore: 26
      },
      {
        opponent: 'Sext-Men',
        teamScore: 25,
        opponentScore: 19
      }
    ]
  },
  {
    week: 12,
    tier: 8,
    games: [
      {
        opponent: 'A-Team',
        teamScore: 25,
        opponentScore: 22
      },
      {
        opponent: 'A-Team',
        teamScore: 27,
        opponentScore: 26
      },
      {
        opponent: 'Block Destroyers',
        teamScore: 25,
        opponentScore: 15
      },
      {
        opponent: 'Block Destroyers',
        teamScore: 25,
        opponentScore: 6
      }
    ]
  },
  {
    week: 13,
    tier: 7,
    games: [
      {
        opponent: 'My Dumps',
        teamScore: 25,
        opponentScore: 22
      },
      {
        opponent: 'My Dumps',
        teamScore: 18,
        opponentScore: 25
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 23,
        opponentScore: 25
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 20,
        opponentScore: 25
      }
    ]
  },
  {
    week: 14,
    tier: 8,
    games: [
      {
        opponent: 'Sext-Men',
        teamScore: 25,
        opponentScore: 21
      },
      {
        opponent: 'Sext-Men',
        teamScore: 25,
        opponentScore: 12
      },
      {
        opponent: 'Block Destroyers',
        teamScore: 25,
        opponentScore: 18
      },
      {
        opponent: 'Block Destroyers',
        teamScore: 25,
        opponentScore: 23
      }
    ]
  },
  {
    week: 15,
    tier: 7,
    games: [
      {
        opponent: 'Go Sportsball!',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 25,
        opponentScore: 21
      },
      {
        opponent: 'My Dumps',
        teamScore: 25,
        opponentScore: 23
      },
      {
        opponent: 'My Dumps',
        teamScore: 15,
        opponentScore: 25
      }
    ]
  },
  {
    week: 16,
    tier: 6,
    games: [
      {
        opponent: 'Capital ACE',
        teamScore: 21,
        opponentScore: 25
      },
      {
        opponent: 'Capital ACE',
        teamScore: 19,
        opponentScore: 25
      },
      {
        opponent: 'Believe That',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Believe That',
        teamScore: 27,
        opponentScore: 26
      }
    ]
  },
  {
    week: 17,
    tier: 7,
    games: [
      {
        opponent: 'A-Team',
        teamScore: 19,
        opponentScore: 25
      },
      {
        opponent: 'A-Team',
        teamScore: 23,
        opponentScore: 25
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 26,
        opponentScore: 27
      }
    ]
  },
  {
    week: 18,
    tier: 8,
    games: [
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 16
      },
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Sext-Men',
        teamScore: 25,
        opponentScore: 16
      },
      {
        opponent: 'Sext-Men',
        teamScore: 23,
        opponentScore: 25
      }
    ]
  },
  {
    week: 19,
    tier: 8,
    games: [
      {
        opponent: 'My Dumps',
        teamScore: 26,
        opponentScore: 24
      },
      {
        opponent: 'My Dumps',
        teamScore: 25,
        opponentScore: 17
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 25,
        opponentScore: 9
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 25,
        opponentScore: 22
      }
    ]
  },
  {
    week: 20,
    tier: 7,
    games: [
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 24,
        opponentScore: 26
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 20,
        opponentScore: 25
      },
      {
        opponent: 'Hungry Hungry Tippos',
        teamScore: 25,
        opponentScore: 16
      },
      {
        opponent: 'Go Sportsball!',
        teamScore: 21,
        opponentScore: 25
      }
    ]
  },
  {
    week: 21,
    tier: 7,
    games: [
      {
        opponent: 'Believe That',
        teamScore: 19,
        opponentScore: 25
      },
      {
        opponent: 'Believe That',
        teamScore: 25,
        opponentScore: 19
      },
      {
        opponent: 'My Dumps',
        teamScore: 25,
        opponentScore: 23
      },
      {
        opponent: 'My Dumps',
        teamScore: 25,
        opponentScore: 22
      }
    ]
  },
  {
    week: 22,
    tier: 6,
    games: [
      {
        opponent: 'Capital ACE',
        teamScore: 12,
        opponentScore: 25
      },
      {
        opponent: 'Capital ACE',
        teamScore: 18,
        opponentScore: 25
      },
      {
        opponent: 'Tappa',
        teamScore: 25,
        opponentScore: 15
      },
      {
        opponent: 'Tappa',
        teamScore: 25,
        opponentScore: 15
      }
    ]
  },
  {
    week: 23,
    tier: 6,
    games: [
      {
        opponent: 'Whorecruxes',
        teamScore: 15,
        opponentScore: 25
      },
      {
        opponent: 'Whorecruxes',
        teamScore: 22,
        opponentScore: 25
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 12,
        opponentScore: 25
      },
      {
        opponent: 'You Wont Break My Hole',
        teamScore: 25,
        opponentScore: 27
      }
    ]
  },
  
]

export default data