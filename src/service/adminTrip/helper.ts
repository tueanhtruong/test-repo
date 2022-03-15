enum TripStatusIndex {
  PROCESSING = 1,
  READY = 2,
  REJECTED = 3,
}
export const checkTripStatusKey = (
  status: ("APPROVED" | "REJECTED" | "PENDING")[] | undefined
) => {
  const isApproveAll = status?.every((x) => x === "APPROVED");
  if (isApproveAll) return TripStatusIndex.READY;

  const hasRejected = status?.find((x) => x === "REJECTED");
  if (hasRejected) return TripStatusIndex.REJECTED;

  const hasPending = status?.find((x) => x === "PENDING");
  if (hasPending) return TripStatusIndex.PROCESSING;
  return TripStatusIndex.PROCESSING;
};
