import { Row } from "antd";
import Text from "antd/lib/typography/Text";

export default function DateText(date, color) {
    return (
        <Row justify="end">
            <Text
                style={{
                    color: color,
                    fontSize: 20,
                    fontFamily: "Roboto-Light",
                    marginBottom: 100,
                }}
            >
                {date}
            </Text>
        </Row>
    );
}