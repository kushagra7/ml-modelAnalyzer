import React from 'react'
import { Importer, ImporterField } from 'react-csv-importer';
import 'react-csv-importer/dist/index.css';

const CsvReader = () => {
    return (
        <div>
            <Importer
                chunkSize={10000} // optional, internal parsing chunk size in bytes
                assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
                restartable={false} // optional, lets user choose to upload another file when import is complete
                onStart={({ file, fields }) => {
                    // optional, invoked when user has mapped columns and started import
                    console.log("starting import of file", file, "with fields", fields);
                }}
                processChunk={async (rows) => {
                    // required, receives a list of parsed objects based on defined fields and user column mapping;
                    // may be called several times if file is large
                    // (if this callback returns a promise, the widget will wait for it before parsing more data)
                    console.log("received batch of rows", rows);

                    // mock timeout to simulate processing
                    await new Promise((resolve) => setTimeout(resolve, 500));
                }}
                onComplete={({ file, fields }) => {
                    // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
                    console.log("finished import of file", file, "with fields", fields);
                }}
                onClose={() => {
                    // optional, invoked when import is done and user clicked "Finish"
                    // (if this is not specified, the widget lets the user upload another file)
                    console.log("importer dismissed");
                }}
            >
                <ImporterField name="name" label="Feature 1" />
                <ImporterField name="email" label="Feature 2" />
                <ImporterField name="dob" label="Feature 3" optional />
                <ImporterField name="postalCode" label="Feature 4" optional />
            </Importer>
        </div>
    )
}

export default CsvReader
