export type PegaAction = 'openWorkByHandle' | 'openAssignment' | 'showPage';

export function handleEvent(
  getPConnect: () => any,
  action: PegaAction,
  payload: Record<string, any>
) {
  const pConn = getPConnect();
  switch (action) {
    case 'openWorkByHandle': {
      pConn.getActionsApi().openWorkByHandle(payload.caseID, payload.className);
      break;
    }
    case 'openAssignment': {
      pConn.getActionsApi().openAssignment(payload.assignmentID);
      break;
    }
    case 'showPage': {
      pConn.getActionsApi().showPage(payload.pageName, payload.className);
      break;
    }
    default:
      break;
  }
}
