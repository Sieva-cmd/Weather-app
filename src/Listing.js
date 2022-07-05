import React, { Component } from 'react';


class Listing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            records: []
        }

    }

    componentDidMount() {
        fetch("https://open-meteo.com/en/docs#latitude=-1.2762&longitude=36.7965&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m")
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
        }

        renderListing() {
            let recordList = []
            this.state.records.map(record => {
                return recordList.push(`<li key={record.id}>{record.name}</li>`)
            })

            return recordList;
        }

        render() {
            return (
                `<ul>
                {this.renderListing()}
            </ul>`
            );
        }
    }

    export default Listing;