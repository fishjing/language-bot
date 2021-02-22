const guysMessage =
  "Please bear in mind that the makeup of this Slack is " +
  "very diverse, and some people feel excluded by the " +
  "use of the term “guys”. Maybe you could try using " +
  "_people_, _team_, _all_, _folks_, _everyone_, or _y'all_?";

const crazyMessage =
  "Using the word _crazy_ is considered by some to be insensitive to sufferers of mental illness, have you considered a different adjective like _ridiculous_, _outrageous_, _unthinkable_, _nonsensical_, _incomprehensible_?";

const insaneMessage =
  "The word _insane_ is considered by some to be insensitive to sufferers of mental illness. Have you considered using a different adjective instead?";

const sexyMessage = "Did you mean _zesty_?";

const slaveMessage =
  "If you are referring to a data replication strategy, please consider a term such as _follower_ or _replica_.";

const SensitiveMessages = {
  Guy: guysMessage,
  Crazy: crazyMessage,
  Insane: insaneMessage,
  Sexy: sexyMessage,
  Slave: slaveMessage,
};

export { SensitiveMessages };
