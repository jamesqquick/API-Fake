import React from "react";
import { DataDisplay } from "./DataDisplay";

export default function APIDisplay({ api }) {
  return (
    <div>
      <a href={`/functions/api${api.url}`}>{`/functions/api${api.url}`}</a>
      <p>Url: {api.url}</p>
      <p>Status: {api.status}</p>
      <p>Response:</p>
      <DataDisplay data={JSON.parse(api.response)} />
    </div>
  );
}
