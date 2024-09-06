import { BiTransferAlt } from "react-icons/bi";

const TranHistory = ({ from, apiKey, address }) => {

    let tranHistory = [];
    if (from === 'walletHome') {
        tranHistory = [
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x85a91775da936112bf43022e21dd1ddf99dbc0a64fb99c4ed8c745c5feca2e12",
                "nonce": "280",
                "transaction_index": "13",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1343816",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    13
                ],
                "transaction_fee": "0.0015145154"
            }
        ];
        
    } else {
        tranHistory = [
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x85a91775da936112bf43022e21dd1ddf99dbc0a64fb99c4ed8c745c5feca2e12",
                "nonce": "280",
                "transaction_index": "13",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1343816",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    13
                ],
                "transaction_fee": "0.0015145154"
            }, {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            },
            {
                "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
                "nonce": "281",
                "transaction_index": "14",
                "from_address_entity": null,
                "from_address_entity_logo": null,
                "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
                "from_address_label": null,
                "to_address_entity": null,
                "to_address_entity_logo": null,
                "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
                "to_address_label": null,
                "value": "0",
                "gas": "27000000",
                "gas_price": "8200000000",
                "input": "0xb2a43c8c",
                "receipt_cumulative_gas_used": "1528513",
                "receipt_gas_used": "184697",
                "receipt_contract_address": null,
                "receipt_root": null,
                "receipt_status": "1",
                "block_timestamp": "2024-06-21T09:09:24.000Z",
                "block_number": "6153742",
                "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
                "transfer_index": [
                    6153742,
                    14
                ],
                "transaction_fee": "0.0015145154"
            }
        ];
    }

    return (
        <>
            {
                tranHistory.map((element, index) => {
                    return (
                        <div key={index} className="text-start flex items-center justify-between p-3 border-b-[1px] border-gray-400 hover:bg-slate-900">
                            <div className="flex-col justify-start">
                                <p className="text-[12px] font-thin">{element.block_timestamp.slice(0, 10)}</p>
                                <div className="flex">
                                    <BiTransferAlt className="text-white m-1" size="23" />
                                    <div className="flex-col">
                                        <p className="text-[15px] font-semibold m-1">{element.input == "0x" ? (element.from_address == address ? "Transfer" : "Received") : "Smart Contract Interaction"}</p>
                                        <p className={`text-[12px] m-1 font-semibold ${element.receipt_status === '1' ? 'text-green-500' : 'text-red-600'}`}>{element.receipt_status === '1' ? 'Success' : 'Failed'}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[14px] font-bold">{element.transaction_fee.slice(0, 5)} Eth</p>

                        </div>
                    )
                })
            }
        </>
    )

}


export default TranHistory;