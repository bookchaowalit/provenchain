// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title NotaryRegistry
/// @notice Records the existence of a document hash without storing document contents.
/// @dev This contract has no payment, custody, admin, upgrade, or pause surface.
contract NotaryRegistry {
    struct Record {
        address submitter;
        uint64 timestamp;
    }

    mapping(bytes32 => Record) private records;

    error EmptyDocumentHash();
    error AlreadyNotarized(bytes32 documentHash);

    event DocumentNotarized(
        bytes32 indexed documentHash,
        address indexed submitter,
        uint64 timestamp
    );

    /// @notice Permanently records a non-zero document hash once.
    /// @param documentHash SHA-256 digest represented as bytes32.
    function notarize(bytes32 documentHash) external {
        if (documentHash == bytes32(0)) revert EmptyDocumentHash();
        if (records[documentHash].timestamp != 0) {
            revert AlreadyNotarized(documentHash);
        }

        uint64 timestamp = uint64(block.timestamp);
        records[documentHash] = Record({
            submitter: msg.sender,
            timestamp: timestamp
        });

        emit DocumentNotarized(documentHash, msg.sender, timestamp);
    }

    /// @notice Returns the public proof record for a document hash.
    function getRecord(bytes32 documentHash)
        external
        view
        returns (address submitter, uint64 timestamp, bool notarized)
    {
        Record memory record = records[documentHash];
        return (record.submitter, record.timestamp, record.timestamp != 0);
    }
}

