export async function GET() {
  // console.log("hit");
  const uri =
    "https://adminapi.takeuforward.org/api/profile/user/leetcode/Saksham1612";
  const res = await fetch(uri);
  const data = await res.json();
  //   console.log(data);
  return Response.json(data);
}
