import React from "react";
import { DataDisplay } from "./DataDisplay";
import { Card } from "../elements/Card";

export default function APIDisplay({ api, userId }) {

  return (
    <Card>
      <a href={`/.netlify/functions/api/${userId}${api.url}`}>{`/.netlify/${userId}/functions/api${api.url}`}</a>
      <p>Url: {api.url}</p>
      <p>Status: {api.status}</p>
      <p>Response:</p>
      <DataDisplay data={JSON.parse(api.response)} />
    </Card>
  );
}
