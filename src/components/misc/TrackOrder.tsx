import { Button, Divider,  TextInput } from "@mantine/core";


function TrackOrder() {
  return (
    <div className=" py-6 space-y-4 z-10 ">
      <div>
        <h2 className=" font-medium text-xl">
          {" "}
          <span className=" font-bold">Track</span> your order through
        </h2>
      </div>
      {/* <SegmentedControl p={0} color='red' h={60} flex={1}  fullWidth data={['React', 'Angular', 'Svelte', 'Vue']} /> */}
      <div>
        <div className="border rounded-lg flex">
          <div className="mobile border-r rounded-l-lg flex-1 bg-slate-900 text-white font-medium py-2 text-center text-lg">
            Mobile
          </div>
          <div className="awb border-r flex-1  text-slate-400 font-medium py-2 text-center text-lg">
            AWB
          </div>
          <div className="orderid border-r flex-1  text-slate-400 font-medium py-2 text-center text-lg">
            Order Id
          </div>
          <div className="lnr border-r flex-1 rounded-r-lg  text-slate-400 font-medium py-2 text-center text-lg">
            LNR
          </div>
        </div>
      </div>
      <div className="inputmode flex">
        <TextInput
          width={500}
          className="w-96 border"
          variant="outlined"
          placeholder="Enter mobile number"
          size="lg"
        />
      </div>
      <div>
        <Button fullWidth variant="filled" size="lg" color="black">
          Get otp
        </Button>
      </div>
      <Divider color="#d2d2d2" />
      <div>
        <p className=" font-medium text-xs text-slate-400 text-center">Live tracking updates & extra support from our app</p>
      </div>
    </div>
  );
}

export default TrackOrder;
