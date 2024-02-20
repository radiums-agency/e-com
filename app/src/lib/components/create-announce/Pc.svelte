<script lang="ts">

	import Label from "../Label.svelte";

</script>
<div class="grid gap-2">
  <div>
    <Label label="productName">
      Nom 
    </Label>
    <input type="text" name="productName" id="productName" autocomplete="off" class="input">
  </div>
  <div>
    <Label label="productImage">
      Image 
    </Label>
    <input type="file" name="productImage" id="productImage" class="input">
  </div>
  <div class="grid gap-2 grid-cols-2">
    <div >
      <Label label="productStokage">
        Stokage
      </Label>
      <input type="number" name="productStokage" id="productStokage" min="0" class="input">
        </div>
        <div>
      <Label label="productRam">
        Ram
      </Label>
      <input type="number" name="productRam" id="productRam" min="0" class="input">
        </div>
    </div>
  <div class="grid gap-1 grid-cols-2">
    <div>
        <Label label="productCpu">
          Processeur
        </Label>
        <input type="text" name="productProcessor" id="productProcessor" class="input">
    </div>
    <div>
        <Label label="producGpu">
          Carte graphique
        </Label>
        <input type="text" name="producGpu" id="producGpu" class="input">
    </div>
  </div>
  <div>
    <Label label="productDescription">
      Description
    </Label>
    <textarea name="productDescription" id="productDescription" class="textarea"></textarea>
  </div>
</div>