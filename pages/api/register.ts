import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  teamName: string,
  teamLeader: string,
  teamMember1: string,
  teamMember2: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {

  const webhookUrl = process.env.EMAIL_WEBHOOK ?? '';

  const saveMessage = await fetch(webhookUrl, {
    body: JSON.stringify({
      "Team Name": req.body.teamName,
      "Team Leader": req.body.teamLeader,
      "Team Member1": req.body.teamMember1,
      "Team Member2": req.body.teamMember2
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  const result = await saveMessage.body;

  res.status(200).json(JSON.stringify({ "result": result }));
}
