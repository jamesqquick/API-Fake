import React from "react";
import { DataDisplay } from "./DataDisplay";
import { Card } from "../elements/Card";

export default function APIDisplay({ api }) {
  return (
    <Card>
      <a href={`/functions/api${api.url}`}>{`/functions/api${api.url}`}</a>
      <p>Url: {api.url}</p>
      <p>Status: {api.status}</p>
      <p>Response:</p>
      <DataDisplay data={JSON.parse(api.response)} />
    </Card>
  );
}
