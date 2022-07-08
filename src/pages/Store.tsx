import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store(){
    return <><h1 className="">Store</h1>
    <Row md={2} xs={1} lg={3}>
        {storeItems.map(item=>(
            <Col className="my-[10px]" key={item.id}><StoreItem {...item}/></Col>
        ))}
    </Row>
    </>
}