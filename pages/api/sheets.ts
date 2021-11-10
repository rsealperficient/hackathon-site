import { google } from "googleapis";

export type Team = {
    teamName: string,
    teamLeader: string,
    teamMember1: string,
    teamMember2: string
}

export async function getTeamsList(): Promise<Team[]> {
    try {
        console.debug('getTeamsList()');
        const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            '',
            (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'Teams', // sheet name
        });

        const rows = response.data.values;
        const teams: Team[] = [];

        if (rows?.length) {
            rows?.slice(1).map((row) => {
                const team: Team = {
                    teamName: row[0],
                    teamLeader: row[1],
                    teamMember1: row[2] !== undefined ? row[2] : '&nbsp;',
                    teamMember2: row[3] !== undefined ? row[3] : '&nbsp;'
                };
                teams.push(team);
            });
        }

        return teams;

    } catch (err) {
        console.error(err);
    }
    return [];
}