import { defaultValueProcessor, ValueProcessor } from "react-querybuilder";

const valueProcessor: ValueProcessor = (field, operator, value) => {
    let value = `'${value}'`;

    if (field === "date" || field === "order_date" || field === "ship_date") {
        val = `date '${value}'`;
    } else {
        val = defaultValueProcessor(field, operator, value);
    }

    return val;
};

export default valueProcessor;