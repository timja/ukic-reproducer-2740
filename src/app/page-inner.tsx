"use client";
import {IcDataTable} from "@ukic/canary-react";
import {IcDataTableColumnObject} from "@ukic/canary-web-components";
import React from "react";
import {IcTypography} from "@ukic/react";

export default function PageInner() {
    const columns: IcDataTableColumnObject[] = [
        {
            key: 'first',
            title: 'First name',
            dataType: 'string',
        },
        {
            key: 'last',
            title: 'Last name',
            dataType: 'string',
        },
        {
            key: 'status',
            title: 'Status',
            dataType: 'string',
        },
    ]

    const data = [
        {
            first: "Joe",
            last: "Bloggs",
            status: "In progress"
        },
        {
            first: "Sarah",
            last: "Smith",
            status: "Review"
        },
        {
            first: "Mark",
            last: "Bloggs",
            status: "Draft"
        },

    ]

    const renderCustomElements = (index: number) => {
        return (
            <IcTypography key={index} slot={`status-${index}`}>Hi</IcTypography>
        )
    }

    return (
        <IcDataTable caption={"Hello"} columns={columns} data={data}>
            {data.map((row, index) => renderCustomElements(index))}
        </IcDataTable>
    )
}
