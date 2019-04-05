pragma solidity ^0.5.0;

/*
Election contract that allows the owner to issue voting rights
to anybody and also end the election and announce results
*/
contract Election {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // struct Voter {
    //     //bool authorized;
    //     bool voted;
    //     uint vote;
    // }

    address public owner;
    string public electionName;
    uint public candidatesCount;
    bool public votingEnded;
    bool public votingStarted;

    // mapping(address => Voter) public voters;
    //Candidate[] public candidates;
    mapping(uint => Candidate) public candidates;

    // Store accounts that have voted
    mapping(address => bool) public voters;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    constructor(string memory _name) public {
        owner = msg.sender;
        electionName = _name;
    }

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

    function addCandidate(string memory name) ownerOnly public {
        require(!votingStarted);
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    // function authorize(address person) ownerOnly public {
    //     voters[person].authorized = true;
    // }

    function vote(uint _candidateId) public {
        //make sure voter is authorized and has not already voted
        require(!voters[msg.sender]);
        // require(!voters[msg.sender].voted);
        //require(voters[msg.sender].authorized);
        require(!votingEnded);
        require(votingStarted);
        require(!(msg.sender == owner));

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        //record vote
        voters[msg.sender] = true;
        // voters[msg.sender].vote = _candidateId;
        // voters[msg.sender].voted = true;

        //increase candidate vote count by 1
        candidates[_candidateId].voteCount += 1;

        // trigger voted event
        emit votedEvent(_candidateId);
    }

    function begin() ownerOnly public {
        //destroy the contract
        require(msg.sender == owner);  // Only ballot creator can end the vote.
        votingStarted = true;
    }

    function end() ownerOnly public {
        //destroy the contract
        require(msg.sender == owner);  // Only ballot creator can end the vote.
        votingEnded = true;
    }
}